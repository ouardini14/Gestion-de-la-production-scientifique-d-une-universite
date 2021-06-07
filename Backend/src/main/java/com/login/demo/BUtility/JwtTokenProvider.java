package com.login.demo.BUtility;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.login.demo.constant.SecurityConstant;
import com.login.demo.model.Doctorant;
import org.springframework.beans.factory.annotation.Value;

import java.nio.charset.StandardCharsets;
import java.util.Date;

public class JwtTokenProvider {
  /*  @Value("${jwt.secret}")
    private String secret;

    public String generateJwtToken(Doctorant doc){
    String[] claims =getClaimsFromDoc(doc);
    return JWT.create().withIssuer(SecurityConstant.token_provide_company)
                        .withIssuedAt(new Date())
                        .withSubject(doc.getCin())
                        .withArrayClaim(SecurityConstant.AUTHORITIES,claims)
                        .withExpiresAt(new Date(System.currentTimeMillis()+SecurityConstant.expiration_time))
                        .sign(Algorithm.HMAC512(secret.getBytes()));
    }
    private String[] getClaimsFromDoc(Doctorant doc){

    }*/
}

