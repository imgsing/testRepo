<Connector port="8080" protocol="HTTP/1.1" 
           connectionTimeout="20000" 
           redirectPort="8443" URIEncoding="UTF-8"/>
catalina.sh/catalina.bat - added following

set JAVA_OPTS=--Xms256m -Xmx1024m -Xss268k -server -XX:MaxPermSize=256m -XX:-UseGCOverheadLimit -Djava.awt.headless=true -Djavax.servlet.request.encoding=UTF-8 -Dfile.encoding=UTF-8

set CATALINA_OPTS=-Dfile.encoding="UTF-8"
console.log("ee1");
console.log("ee2");
