# Fairy Tales Coreference Corpus

This repository provides a small corpus (`texts/`) of Dutch fairy tales from the collection *Volkssprookjes uit Nederland en Vlaanderen* by Sinninghe (1978). The corpus has been annotated for coreference, which  comprises mainly character coreference (including both proper names and nouns referring to characters). The annotations have been made using [brat](http://brat.nlplab.org/) and can be found under `annotations/`. The folder `visualization/` provides a playful narrative chart visualization of each story, such as the following:

![Example story graph](story-graph.png)

To view all visualizations, move to the visualization directory and run a local server, e.g. using:

    python -m http.server

If you use this corpus, please cite the following paper:

    @InProceedings{karsdorp:2015,
      author =  {Folgert Karsdorp and Marten van der Meulen and Theo Meder and Antal van den Bosch},
      title = {{Animacy Detection in Stories}},
      booktitle = {6th Workshop on Computational Models of Narrative (CMN 2015)},
      pages = {82--97},
      series =  {OpenAccess Series in Informatics (OASIcs)},
      year =  {2015},
      volume =  {45},
      editor =  {Mark A. Finlayson and Ben Miller and Antonio Lieto and Remi Ronfard},
      publisher = {Schloss Dagstuhl--Leibniz-Zentrum fuer Informatik},
      address = {Dagstuhl, Germany},
      doi =   {http://dx.doi.org/10.4230/OASIcs.CMN.2015.82},
    }


