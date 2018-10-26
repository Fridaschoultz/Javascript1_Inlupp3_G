 // Konstruktor som skapar en blueprint för att beskriva två personer

	  function Person(name, epost, mobil, adress){ /* Funktionen Person innehåller egenskaper. */
			this.name = name;
			this.epost  = epost;
			this.mobil = mobil;
			this.adress = adress;
			this.print = function(){
				console.log(this.name +"\n\n"+
				this.adress.gatuadress +"\n"+
				this.adress.postnr +" "+
				this.adress.ort);          
				/* this.print() blir en
			     funktion som utför uppgiften att skriva ut 
				 önskad information. Här väljer man 
				 vad som skall visas i anropen print() längst ner */
			} 

		}

		
		function Adress (gatuadress, postnr, ort) {
			this.gatuadress = gatuadress;
			this.postnr = postnr;
			this.ort = ort;    /* Funktionen Adress innehåller ytterligare egenskaper
					            för att beskriva personen/personerna. */
	}
	
	//Här skapas två olika objekt (instanser) som skickar inargument till respektive objekts parametrar.
	 
	let adress1 = new Adress ("Björnspinnarvägen 113", "14137", "Huddinge"); 
	let frida = new Person ("Frida Schoultz", "fridaschoultz@hotmail.com", "0736781423", adress1); 

	let adress2 = new Adress ("Kyrkbacken 6", "12364", "Solna"); 
	let isabelle = new Person ("Isabelle Schoultz", "blabla@hotmail.com", "0704561738", adress2); 

	// Anropar och visar aktuell information
	isabelle.print(); 
	frida.print(); 
		

		




		
		
















