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

    bundle install
    cd client
    bower install
    npm install
    
## Start

    bundle exec foreman start