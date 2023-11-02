<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Печатаем список параметров </title>
	<style>
	table {
	font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
	font-size: 14px;
	border-collapse: collapse;
	text-align: center;
	}
	th, td:first-child {
	background: #AFCDE7;
	color: white;
	padding: 10px 20px;
	}
	th, td {
	border-style: solid;
	border-width: 0 1px 1px 0;
	border-color: white;
	}
	td {
	background: #D8E6F3;
	}
	th:first-child, td:first-child {
	text-align: left;
	}
	</style>
    </head>
    <body>
	<%@page pageEncoding="UTF-8"%> 
	<h1> Список параметров, переданных на страницу</h1>
	
	<%
	request.setCharacterEncoding("UTF-8");
	java.util.Enumeration<String> names = request.getParameterNames();
	%>
	
	<table>
	<tr><th>Имя</th> <th>Значение</th></tr>
	<%while (names.hasMoreElements()) {
		String name = names.nextElement();
		String value = request.getParameter(name);
	%>
	<tr>
		<td><%= name%></td>
		<td><%= value%></td> 
	</tr>
	<%
	}
	%>

	<table>
	    </body>
</html>