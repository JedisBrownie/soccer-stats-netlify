var dataOnglet = [
    [
        "_equipeNom",
        "_competitionNom",
        "_tirsPm",
        "_taclePm",
        "_interceptionPm",
        "_fautePm",	
        "_horsJeuxPm",            
        "_note"
    ]
    ,[ 
        "_equipeNom",
        "_competitionNom",
        "_tirsPm",
        "_tirsCaPm",
        "_dribblePm",
        "_fautesSubiesPm",
        "_note"
    ]
    , [
            "_equipeNom",
            "_competitionNom",
            "_buts",
            "_tirsPm",
            "_cartonJaune",
            "_cartonRouge",
            "_possession",
            "_passesReussies",
            "_aeriensGagnes",
            "_note"
        ]
    ];
    var dataOngletN = [
        [
            "Nom d'equipe",
            "Nom de competition",
            "Tirs pm",
            "Tacle pm",
            "Interception pm",
            "Faute pm",	
            "Hors jeux pm",            
            "Note"
        ]
        ,[ 
            "Nom d'equipe",
            "Nom de competition",
            "Tirs pm",
            "Tirs ca pm",
            "Dribble pm",
            "Fautes subits pm",
            "Note"
        ]
        , [
                "Nom d'equipe",
                "Nom de competition",
                "Buts",
                "Tirs pm",
                "Carton jaune",
                "Carton rouge",
                "Possession",
                "Passes reussis",
                "Aeriens gagnees",
                "Note"
            ]
        ];
    /*window.addEventListener('load', function() {
    var st=loadDataGeneralsmp(2);
    this.alert(st);
    idListeEntete=2;
    var tr0=this.document.getElementById("reponse");
    var str0="";
    for(var i=0;i<st.length;i++)
    {
        str0=str0+"<tr>";
            for(var j=0;j<dataOnglet[idListeEntete].length;j++)
            {
                str0=str0+"<td>"+st[i][dataOnglet[idListeEntete][j]] +"</td>";
            }    
        str0=str0+"</tr>";
    }
    tr.innerHTML=str;
    var tr=this.document.getElementById("listeParam");
    var str="";
    for(var i=0;i<dataOnglet[idListeEntete].length;i++)
    {
        str=str+"<th>"+dataOnglet[idListeEntete][i] +"</th>";
    }
    tr.innerHTML=str;
    // Votre code ici sera exécuté lorsque la page est complètement chargée
    alert("La page est complètement chargée !");
    // Vous pouvez appeler des fonctions, manipuler le DOM, etc.
  });*/
function setidListe(type,nbr) {
    setValue(type,localStorage.getItem('value'));
    localStorage.setItem('type',type);
    var tr=this.document.getElementById("listeParam");
    var str="";
    for(var i=0;i<dataOngletN[nbr].length;i++)
    {
        str=str+"<th>"+dataOngletN[nbr][i] +"</th>";
    }
    tr.innerHTML=str;
}
function setExt(value) {
    setValue(localStorage.getItem('type'),value);
    localStorage.setItem('value',value);
}
 /*   function loadDataGeneralsmp(value) {
        fetch('https://soccer.bsite.net/soccer-stats-controller/general/' + value)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON response
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert('Title: ' + data[0]["_generalId"]);
                return data;
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }*/
    async function loadDataGeneralsmp(type,value) {
        try {
            const response = await fetch('https://soccer.bsite.net/soccer-stats-controller/'+type+'/' + value);
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // Parse the JSON response
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error; // Rethrow the error if needed
        }
    }
    
    window.addEventListener('load', async function () {
        localStorage.setItem("value", "2");
        localStorage.setItem("type", "general");
        try {
            var idListeEntete = 2;
            var st = await loadDataGeneralsmp('general',2);
            
            var str0 = "";
            
            var str1 = "";
            for (var i = 0; i < st.length; i++) {
                str1 += "<tr>";
                for (var j = 0; j < dataOnglet[idListeEntete].length; j++) {
                    if(dataOnglet[idListeEntete][j]=="_equipeNom"){
                    var n=i+1;
                    str1 += "<td><b>"+n+". "+ st[i][dataOnglet[idListeEntete][j]] + "<b></td>";
                }else if(dataOnglet[idListeEntete][j]=="_note"){
                    str1 += "<td style='color: rgb(240, 136, 33)';><b>" + st[i][dataOnglet[idListeEntete][j]] + "</b></td>";
                }else{
                        str1 += "<td>" + st[i][dataOnglet[idListeEntete][j]] + "</td>";
                    }
                }
                str1 += "</tr>";
            }
            // Append the generated HTML to the element with id "response"
            document.getElementById("response").innerHTML = str1;
    
            var tr = document.getElementById("listeParam");
            var str = "";
            
            for (var i = 0; i < dataOngletN[idListeEntete].length; i++) {
                str = str + "<th>" + dataOngletN[idListeEntete][i] + "</th>";
            }
            
            tr.innerHTML = str;
    
            // Your code here will be executed when the page is completely loaded
            // You can call functions, manipulate the DOM, etc.
        } catch (error) {
            console.error('Error during page load:', error);
        }
    });
    
    async function setValue(type,value) {
        try {
            var nv={defense:0,attack:1,general:2};
            var st = await loadDataGeneralsmp(type,value);
            
            var idListeEntete = 2;
            
            var str1 = "";
            for (var i = 0; i < st.length; i++) {
            /*    str1 += "<tr>";
                for (var j = 0; j < dataOnglet[nv[type]].length; j++) {
                    str1 += "<td>" + st[i][dataOnglet[nv[type]][j]] + "</td>";
                }
                str1 += "</tr>";*/
                str1 += "<tr>";
                for (var j = 0; j < dataOnglet[nv[type]].length; j++) {
                    if(dataOnglet[nv[type]][j]=="_equipeNom"){
                    var n=i+1;
                    str1 += "<td><b>"+n+". "+ st[i][dataOnglet[nv[type]][j]] + "<b></td>";
                }else if(dataOnglet[nv[type]][j]=="_note"){
                    str1 += "<td style='color: rgb(240, 136, 33)';><b>" + st[i][dataOnglet[nv[type]][j]] + "</b></td>";
                }else{
                        str1 += "<td>" + st[i][dataOnglet[nv[type]][j]] + "</td>";
                    }
                }
                str1 += "</tr>";
            }
            // Append the generated HTML to the element with id "response"
            document.getElementById("response").innerHTML = str1;
    
        } catch (error) {
            console.error('Error during page load:', error);
        }
    };
