package com.mao.stackerapi.models.security;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * <p>
 * Entidad que refiere a la tabla LOGIN 
 * </p>
 *
 * @author molsson
 * @since 20/11/2022
 */

@Entity
@Table(name = "LOGIN")
public class LoginBO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_LOGIN")
    private Long idLogin;

    @Column(name = "USER")
    private String user;

    @Column(name = "IMAGEN_URL")
    private String imagenUrl;

    @Column(name = "ULTIMO_LOGIN")
    private Timestamp ultimoLogin;

    public LoginBO() {

    }

    public LoginBO(Long idLogin, String user, String imagenUrl, Timestamp ultimoLogin) {
        super();
        this.idLogin = idLogin;
        this.user = user;
        this.imagenUrl = imagenUrl;
        this.ultimoLogin = ultimoLogin;
    }

    public Long getIdLogin() {
        return idLogin;
    }

    public void setIdLogin(Long idLogin) {
        this.idLogin = idLogin;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    public Timestamp getUltimoLogin() {
        return ultimoLogin;
    }

    public void setUltimoLogin(Timestamp ultimoLogin) {
        this.ultimoLogin = ultimoLogin;
    }

    @Override
    public String toString() {
        return "LoginBO [idLogin=" + idLogin + ", user=" + user + ", imagenUrl=" + imagenUrl + ", ultimoLogin="
                + ultimoLogin + "]";
    }

    
}
