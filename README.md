js-css-checkstyle
=================

A sample Javascript CSS checkstyle violation with build in gradle and sonar setup.


Of the four dependencies, only jslint4java should be manually
downloaded from
http://code.google.com/p/jslint4java/downloads/detail?name=jslint4java-2.0.3-dist.zip

Once downloaded, it can be put in root project's lib directory. If you have installed
the file to your local maven repository thats cool too.

    //download this from googlecode
    js ('jslint4java:jslint4java:2.0.3')

    //1.7R4 does not work
    css ('rhino:js:1.6R7')

    //required for xslt transformation
    xsl('net.sf.saxon:Saxon-HE:9.4') {transitive=false}

Quality Check
=============
    //to perform csslint check and jslint check
    gradle quality

    //to perform csslint check
    gradle css

    //to perform jslint check
    gradle js


Sonar
=====

    //Download sonar-3.3.2 for e.g. from
    http://www.sonarsource.org/downloads/

    //Download javascript plugin
    http://docs.codehaus.org/display/SONAR/JavaScript+Plugin

    //sonar analyse the javascript project
    mvn sonar:sonar -f sonar-js.xml



