/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Dao;

import Config.Conexion;
import Dto.DatosFisicos;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Consultas {
   
    public boolean ActualizarDatosFisicos (DatosFisicos obj) throws SQLException {
        PreparedStatement objPreparedStatement=null;
        Connection objConexion=null;
        
        int resInsert;
        String sqlInsert = "INSERT INTO public.\"DatosFisicos\"(\n" +
        " \"Peso\", \"Estatura\", \"Comentario\", \"IDUsuario\")\n" +
        " VALUES (?, ?, ?, ?)";
        try {
                if(buscarUsuario(obj.getIdJugador())){
                    objConexion = Conexion.conectarse();
                    objPreparedStatement = objConexion.prepareStatement(sqlInsert);

                    objPreparedStatement.setString(1, obj.getPeso());
                    objPreparedStatement.setString(2, obj.getAltura());
                    objPreparedStatement.setString(3, obj.getComentario());
                    objPreparedStatement.setInt(4, obj.getIdJugador());

                    resInsert = objPreparedStatement.executeUpdate();

                    objPreparedStatement.close();
                    objConexion.close();
                    if (resInsert > 0) 
                        return true;
                    else 
                        return false;
                }else{
                    return false;
                }
        } catch (SQLException e) {
            return false;
        }finally {
            if (objConexion != null)
                objConexion.close();
            if (objPreparedStatement != null)
                objPreparedStatement.close();
        }
    } 
    public boolean buscarUsuario(int idUsuario) throws SQLException {
		
        PreparedStatement objPreparedStatement=null;
        ResultSet objResultSet;
        Connection objConexion=null;
        
        String sqlQuery = "SELECT \"IDUsuario\", \"Clave\"\n" +
        " FROM public.\"Usuario\" WHERE \"IDUsuario\"=?";
        try {
            objConexion = Conexion.conectarse();
            objPreparedStatement = objConexion.prepareStatement(sqlQuery);

            objPreparedStatement.setInt(1, idUsuario);
            objResultSet = objPreparedStatement.executeQuery();
            
            if (objResultSet.next()) {
                objPreparedStatement.close();
                objConexion.close();
                return true;	
            }else{
                objPreparedStatement.close();
                objConexion.close();
                return false;
            }
        } catch (SQLException e) {
            return false;
        }finally {
            if (objConexion != null)
                objConexion.close();
            if (objPreparedStatement != null)
                objPreparedStatement.close();
        }
    }
    
}
