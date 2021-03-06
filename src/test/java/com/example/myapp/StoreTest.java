package com.example.myapp;

import com.example.myapp.database.ProductMapper;
import com.example.myapp.database.UserMapper;
import com.example.myapp.productCatalog.Product;
import com.example.myapp.productCatalog.ProductCatalog;
import com.example.myapp.userCatalog.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class StoreTest {

    Store store;
    @Mock
    ProductCatalog productCatalogMock;
    @Mock
    ProductMapper productMapperMock;
    @Mock
    UserMapper userMapperMock;
    @Mock
    Product productMock;
    @Mock
    User userMock;

    @Before
    public void setUp() throws Exception {
        store = new Store(userMapperMock, productMapperMock);
    }

    @Test
    public void addNewProduct(){
        store.addNewProduct(productMock);
        Mockito.verify(productMapperMock).insert(productMock);
    }

    @Test
    public void deleteProduct(){
        store.deleteProduct("a1");
        Mockito.verify(productMapperMock).delete("a1");
    }

    @Test
    public void modifyProduct(){
        store.modifyProduct("a1",productMock);
        Mockito.verify(productMapperMock).update(productMock);
    }

    @Test
    public void addNewUser(){
        store.addNewUser(userMock);
        Mockito.verify(userMapperMock).insert(userMock);
    }
    @Test
    public void deleteUser(){
        store.deleteUser(userMock);
        Mockito.verify(userMapperMock).delete(userMock);
    }



}