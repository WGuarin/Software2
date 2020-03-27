/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Config;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;
/**
 *
 * @author Vinni - vinni9@gmail.com
 */
@Provider
public class CORSFilter implements ContainerResponseFilter {

    public CORSFilter() {
        super();
    }

    @Override
    public void filter(ContainerRequestContext containerRequest, ContainerResponseContext containerResponse) {
        containerResponse.getHeaders().add("Access-Control-Allow-Origin", "*");
        containerResponse.getHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        containerResponse.getHeaders().add("Access-Control-Allow-Credentials", "true");
        containerResponse.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");

    }

}
