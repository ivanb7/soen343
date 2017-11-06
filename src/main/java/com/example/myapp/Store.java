package com.example.myapp;

import com.example.myapp.database.ProductMapper;
import com.example.myapp.database.UserMapper;
import com.example.myapp.productCatalog.Product;
import com.example.myapp.productCatalog.ProductCatalog;
import com.example.myapp.purchases.PurchaseMapper;
import com.example.myapp.transactions.Transaction;
import com.example.myapp.userCatalog.User;
import com.example.myapp.userCatalog.UserCatalog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class Store {

    private Transaction transaction;
    @Autowired
    private ProductMapper productMapper;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private PurchaseMapper purchaseMapper;

    public Store()
    {
        transaction = new Transaction(Transaction.Type.add);
        transaction.setComplete(true);

    }

    public Store(UserMapper userMapper, ProductMapper productMapper){

        transaction = new Transaction(Transaction.Type.add);
        transaction.setComplete(true);
        this.userMapper = userMapper;
        this.productMapper = productMapper;

    }

    public ProductCatalog getProductCatalog() {
        return productMapper.getProductCatalog();
    }

    public void addNewProduct(int userId,Product product){
        if (userId!=transaction.getUserId())
        {
            System.out.println("Transaction in progress, please wait and try again");
            return;
        }
        this.productMapper.insert(product);
    }

    public void deleteProduct(int userId,int id){
        if (userId!=transaction.getUserId())
        {
            System.out.println("Transaction in progress, please wait and try again");
            return;
        }
        this.productMapper.delete(id);
    }

    public void modifyProduct(int userId,int id, Product product){
        if (userId!=transaction.getUserId())
        {
            System.out.println("Transaction in progress, please wait and try again");
            return;
        }
        product.setId(id);
        this.productMapper.update(product);
    }


    public void addNewUser(int userId, User user){
        if (userId != transaction.getUserId()) {
            System.out.println("Transaction in progress, please wait and try again");
            return;
        }
        this.userMapper.insert(user);
    }

    public void initiateTransaction(int userId, Transaction.Type t){

        if(transaction.isComplete())
        {
            transaction.setComplete(false);
            transaction.setUserId(userId);
            transaction.setType(t);
        }
        else if(!transaction.isComplete())
        {
            if(transaction.getUserId()==userId)
            {
                transaction.setType(t);
                transaction.setUserId(userId);
                transaction.setComplete(false);
            }
            else{
                System.out.printf("transaction in progress, please wait");
            }
        }
    }


    public void endTransaction(int userId)
    {
        if (userId!=transaction.getUserId())
        {
            System.out.println("Transaction in progress, please wait and try again");
            return;
        }
        productMapper.commit();
        userMapper.commit();
        purchaseMapper.commit();
        transaction.setComplete(true);
        transaction.setUserId(-1);
    }

    public ProductMapper getProductMapper() {
        return productMapper;
    }

    public UserMapper getUserMapper(){
        return userMapper;
    }

    public boolean validateTransaction(int userId){
        if (userId != transaction.getUserId()) {
            System.out.println("Transaction in progress, please wait and try again");
            return false;
        }
        else
            System.out.println("No transaction in progress");
            return true;
    }
}
