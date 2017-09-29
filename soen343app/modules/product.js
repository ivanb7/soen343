

var util = require('util');

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
function Product(id,model,weight,price,brand)
{
    this.id=id;
    this.model=model;
    this.weight=weight;
    this.price=price;
    this.brand=brand;
    this.toString=function(){
    console.log("id: "+this.id+" model: "+this.model+" weight: "+this.weight+" price: "+this.price+" brand: "+this.brand);
    }
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var television = function(id,model,weight,price,brand,dimensions)
{
    television.super_.call(this,id,model,weight,price,brand);
    this.dimensions = dimensions;
    this.toString = function(){

        console.log("id: "+this.id+" model: "+this.model+" weight: "+this.weight+" price: "+this.price+" brand: "+this.brand+" dimensions: "+this.dimensions);
    }
};

util.inherits(television,Product);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var monitor = function(id,model,weight,price,brand,size)
{
    monitor.super_.call(this,id,model,weight,price,brand);
    this.size = size;
    this.toString = function(){
        console.log("id: "+this.id+" model: "+this.model+" weight: "+this.weight+" price: "+this.price+" brand: "+this.brand+" size: "+this.size);
    }
};

util.inherits(monitor,Product);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var computer = function(id,model,weight,price,brand,processorType,cpuCores,ram,hardDriveSize)
{
    computer.super_.call(this,id,model,weight,price,brand);
    this.processorType = processorType;
    this.cpuCores = cpuCores;
    this.ram= ram;
    this.hardDriveSize= hardDriveSize;
    this.toString = function(){
        console.log("id: "+this.id+" model: "+this.model+" weight: "+this.weight+" price: "+this.price+" brand: "+this.brand+" processorType: "
                    +this.processorType+" cpuCores: "+this.cpuCores+" ram: "+this.ram+" hardDriveSize: "+this.hardDriveSize);
    }
};

util.inherits(computer,Product);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var desktop = function(id,model,weight,price,brand,processorType,cpuCores,ram,hardDriveSize,dimensions)
{
    desktop.super_.call(this,id,model,weight,price,brand,processorType,cpuCores,ram,hardDriveSize);
    this.dimensions = dimensions;
    this.toString = function(){
        console.log("id: "+this.id+" model: "+this.model+" weight: "+this.weight+" price: "+this.price+" brand: "+this.brand+" processorType: "
                    +this.processorType+" cpuCores: "+this.cpuCores+" ram: "+this.ram+" hardDriveSize: "+this.hardDriveSize+" dimensions: "+this.dimensions);
    }
};

util.inherits(desktop,computer);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var tablet = function(id,model,weight,price,brand,processorType,cpuCores,ram,hardDriveSize,dimensions,batteryInfo,operatingSystem,cameraInfo)
{
    tablet.super_.call(this,id,model,weight,price,brand,processorType,cpuCores,ram,hardDriveSize);
    this.dimensions = dimensions;
    this.batteryInfo = batteryInfo;
    this.operatingSystem = operatingSystem;
    this.cameraInfo = cameraInfo;
    this.toString = function(){
        console.log("id: "+this.id+" model: "+this.model+" weight: "+this.weight+" price: "+this.price+" brand: "+this.brand+" processorType: "
                    +this.processorType+" cpuCores: "+this.cpuCores+" ram: "+this.ram+" hardDriveSize: "+this.hardDriveSize+" dimensions: "+this.dimensions
                    +" batteryInfo: "+this.batteryInfo+" operatingSystem: "+ this.operatingSystem+" cameraInfo: "+this.cameraInfo);
    }
};

util.inherits(tablet,computer);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
var laptop = function(id,model,weight,price,brand,processorType,cpuCores,ram,hardDriveSize,size,batteryInfo,operatingSystem,camera,touchScreen)
{
    tablet.super_.call(this,id,model,weight,price,brand,processorType,cpuCores,ram,hardDriveSize);
    this.size = size;
    this.batteryInfo = batteryInfo;
    this.operatingSystem = operatingSystem;
    this.camera = camera;
    this.touchScreen = touchScreen;
    this.toString = function(){
        console.log("id: "+this.id+" model: "+this.model+" weight: "+this.weight+" price: "+this.price+" brand: "+this.brand+" processorType: "
                    +this.processorType+" cpuCores: "+this.cpuCores+" ram: "+this.ram+" hardDriveSize: "+this.hardDriveSize+" size: "+this.size
                    +" batteryInfo: "+this.batteryInfo+" operatingSystem: "+ this.operatingSystem+" camera: "+this.camera+" touchScreen: "+this.touchScreen);
    }
};

util.inherits(laptop,computer);

module.exports.television = television;
module.exports.monitor = monitor;
module.exports.desktop = desktop;
module.exports.tablet = tablet;
module.exports.laptop = laptop;
