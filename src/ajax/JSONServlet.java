package com.bit.ajax;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class JSONServlet
 */
@WebServlet("/JSONServlet")
public class JSONServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public JSONServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

    @Override
	protected void service(HttpServletRequest request
						 , HttpServletResponse response
						 ) throws ServletException, IOException {
		response.setContentType("text/html; charset=utf-8");
		PrintWriter out = response.getWriter();
		out.print("[{ \"id\": \"1001\", \"name\":\"카페\" },"
				+ " { \"id\": \"1002\", \"name\":\"라떼\" },"
				+ " { \"id\": \"1003\", \"name\":\"커피\" }]");
		out.close();
	}
}



