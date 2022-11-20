package com.mao.stackerapi.repository.security;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mao.stackerapi.models.security.LoginBO;

/**
 * <h1>ILoginRepository</h1>
 *
 * @author molsson
 * @version 1.0
 * @since 20/11/2022
 *
 */
@Repository
public interface ILoginRepository extends JpaRepository<LoginBO, Long> {


	public LoginBO findByUser(String user);

}
