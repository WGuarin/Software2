package Servicios;

import Dao.Consultas;
import Dto.DatosFisicos;
import Dto.Respuesta;
import java.sql.SQLException;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("datos")
public class ServicioDFis {
        
    
    @Path("datosFisicos")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Respuesta actualizarDatosFisicos(DatosFisicos datos){
        Respuesta res=new Respuesta();
        res.setCodigo(1);
        res.setMensajeE("Registro fallido");
        try {
            Consultas cons = new Consultas();
            if(cons.ActualizarDatosFisicos(datos)){
                res.setCodigo(0);
                res.setMensajeE("Registro exitoso");
            }
            return res;
        } catch (SQLException e) {
            return res;
        }  
    }
    
    @Path("consultUs")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Respuesta consultarUsuario(DatosFisicos datos){
        Respuesta res=new Respuesta();
        res.setCodigo(1);
        res.setMensajeE("No existe el usuario");
        try {
            Consultas cons = new Consultas();
            if(cons.buscarUsuario(datos.getIdJugador())){
                res.setCodigo(0);
                res.setMensajeE("El usuario existe");
            }
            return res;
        } catch (SQLException e) {
            return res;
        } 
    }
}
