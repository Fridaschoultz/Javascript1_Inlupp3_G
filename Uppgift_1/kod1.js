 // En konstruktor som skapar två olika objekt som blir en blueprint för att beskriva två personer

	  function Person(name, epost, mobil, adress){ /* Funktionen Person blir en egen "ritning"
                                                        som beskriver en persons egenskaper. Person blir en ny prototyp */
			this.name = name;
			this.epost  = epost;
			this.mobil = mobil;
			this.adress = adress;
			this.print = function(){
				console.log(this.name +"\n\n"+
				this.adress.gatuadress +"\n"+
				this.adress.postnr +" "+
				this.adress.ort);          /*metoden this och egenskapen print blir en
							    funktion som utför uppgiften att skriva ut 
							    önskad information till terminalen, genom att
							    referera (this) till objektet Person där egenskapen 
							    adress finns och sedan dot notation för respektive
							    egenskap (gatuadress,postnr,ort) man vill använda. 
							    Här väljer man vad som skall visas i anropen print() längst ner  */
			} 

		}

		
		function Adress (gatuadress, postnr, ort) {
			this.gatuadress = gatuadress;
			this.postnr = postnr;
			this.ort = ort;    /* Funktionen Adress skapar en "ritning" där Adress får ytterligare egenskaper
					            för att beskriva personen/personerna. */
	}
	
	// adress1 och adress2 blir objekt (instanser) av typen Adress som har tre parametrar.
	//frida och isabelle blir objekt (instanser) av typen Person som har fyra parametrar.
	 
	let adress1 = new Adress ("Björnspinnarvägen 113", "14137", "Huddinge"); /* Nytt objekt skapas och inargument skickas till 
	                                                                          Adress() och dess parametrar. */
	let frida = new Person ("Frida Schoultz", "fridaschoultz@hotmail.com", "0736781423", adress1); /* Nytt objekt skapas och 
	                                                                                                inargument + adress1 
												                                                    skickas till Person() och dess 
												                                                    parametrar. */

	let adress2 = new Adress ("Kyrkbacken 6", "12364", "Solna"); /* Nytt objekt skapas och inargument skickas till Adress och dess 
                                                                      parametrar()*/
	let isabelle = new Person ("Isabelle Schoultz", "blabla@hotmail.com", "0704561738", adress2); /*Här skapas nytt objekt och 
	                                                                                               inargument + adress2 
												                                                   skickas till Person() och dess 
												                                                   parametrar. */

	isabelle.print(); // Anropt till print() som finns i funktionen Person() som skriver ut den aktuella informationen om objektet isabelle
	frida.print(); // Anropt till print() som finns i funktionen Person() som skriver ut den aktuella informationen om objektet frida.
		

		




		
		
















