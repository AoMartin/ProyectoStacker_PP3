package com.mao.stackerapi.repository.security;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mao.stackerapi.models.security.LoginBO;


@Repository
public interface ILoginRepository extends JpaRepository<LoginBO, Long> {


	public LoginBO findByUser(String user);

	public List<LoginBO> findByUserIgnoreCaseContaining(String user);
}
