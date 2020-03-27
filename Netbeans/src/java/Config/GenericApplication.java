/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Config;


import Servicios.ServicioDFis;
import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;
/**
 *
 * @author Vinni - vinni9@gmail.com
 */
@ApplicationPath("app")
public class GenericApplication extends ResourceConfig{
        public GenericApplication (){
        register(ServicioDFis.class);    // Estas son las clases que contienen los servicios
        register(new CORSFilter());
        register(new CORSRequestFilter());

    }
}
