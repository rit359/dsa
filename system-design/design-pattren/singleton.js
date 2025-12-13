/**
The Singleton Design Pattern is a creational design pattern that ensures only one instance of a class is created throughout the application and provides a global point of access to that instance.
*/

class ConfigManager {
    private  static instacne:ConfigManager ;
    
    private ConfigManager(){
    }
    
    public static getinstance():ConfigManager{
        if(!ConfigManager.instacne){
            this.instacne = new ConfigManager();
        }
        return ConfigManager.instacne;
    }
    
}

const ritesh = ConfigManager.getinstance();
const vijay = ConfigManager.getinstance();

console.log(ritesh === vijay);


