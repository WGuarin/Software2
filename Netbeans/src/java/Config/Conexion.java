package Config;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {
    
    public static Connection conectarse() {
        String bd = "DBJugadores"; 
        String usuario = "AdminJug"; 
        String clave = "AdminJug123"; 
        try { 
            Class.forName("org.postgresql.Driver");
            Connection conexion = DriverManager.getConnection(
                    "jdbc:postgresql://127.0.0.1:5432/"+bd,
                    usuario, clave);
            return conexion;
        } catch (ClassNotFoundException ex) {
            System.out.println("Error al registrar el driver de PostgreSQL: " + ex);
        } catch (java.sql.SQLException sqle) {
            System.out.println("Error: " + sqle);
        }
        return null;
    }
    
}
