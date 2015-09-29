# Rails & Gulp: Ein Ansatz

Das im Ruby Kafi diskutierte Beispiel.
Für Inputs & Fragen: raez@puzzle.ch

## Übersicht

* Trennung der Applikation in REST-Backend und Client mit gulp-Pipeline
* Client wird direkt aus /public ausgeliefert - Rails spielt nicht Durchlauferhitzer für die Assets (Performance, baby)
* Hässlich: vor produktiven Deploys via git muss client/dist comittet werden
  * Entschärfungsmöglichkeit: In separatem Branch committen
  * Lösungsmöglichkeit: gulp serverseitig laufen lassen 

## Voraussetzungen

npm, bower und gulp sind installiert.

## Setup

Libraries installieren:

    bundle install
    cd client
    bower install
    npm install
  
(Leere) Datenbank für Rails anlegen:
   
    cp config/database.yml{.dist,}
    #hier evtl database.yml editieren
    bundle exec rake db:create       
    
## Start

    bundle exec foreman start
    
## client/dist/ bzw public/ für Deployment bauen

    gulp
    
## Code-Bootstrapping
Dieses Projekt wurde railsseitig mit dem Composer (https://github.com/RailsApps/rails-composer, Template rails-devise) 
erstellt, clientseitig mit yeoman, (http://yeoman.io/, Template gulp-angular).
    