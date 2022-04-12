# Aufbau 
1) Bachelorarbeit/findings: 
    - algodat02.pdf: Sortieralgorithmus folien von Herr Forler
    - React_START_README.md: 
       - Readme von createReactApp wie man die App nutzen und starten kann
    -  erkenntnisse.mdn: 
       - Erkenntnisse die ich während der Zeit bekommen habe sollte immer dort notiert werden. Oder Commands die man immer wieder gebrauchen könnte. 

2) public: 
Sind die Inhalte drinne die man benötigt um reactjs nutzen können. Anders Beschrieben ist das der Start Punkt. Nachdem man create React App tool genutzt hat: 
    - index.html 
    - favicon.ico

3) src: 
Ist der Gesamte Quellcode der es ermöglicht die Funktionalitäten zu nutzen und umzusetzen: 
    -algortihms: 
        - Dort werden die Sortieralgorithm     implementiert! Jedes Algorithmus soll als extra Datei umgsetzt werden. später kann mann dann schauen das man es alles in einer Datein einfügt.
    -components: 
        - Dort werden Kompenente Bausteine realisiert:
  
          1) Diagramm:       
                 - Wichtig Css verwende ich hier nicht sondern Styled Components (https://styled-components.com/), damit hat man den Vorteil das man nicht mehr Klassenname arbeiten muss sondern definierten Namen gleich als Tags im html Code schreiben kann. (Vorteil: Code Cleaner).
                 -  Hier ist es möglich mithilfe vom Range Slider und Normale Slider, die Anzahl der Listen Elemente(5-50 Elemente )  und die Breite Von den Werte die man zufällig ziehen kann(-99 - 999).
                 -  Dabei soll natürlich bei jeder Änderung auch im Diagram aktualisiert werden. 
                 - Später wenn man den Algorithmus startet sollte man aufjendenfall ein Stopp funktion einbinden um unötige Komplikationen zu verhindern. 


          2) Slider : Slider von MaterialUI  verwendet um RangeSlider und ValueSlider nutzen zu können 
          
          3)setupbar: Toolbar wo man die ganzen Input werte handeln kann. Also erstmal Range Slider und Valueslider     

