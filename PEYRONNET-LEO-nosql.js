use("exam-lego");


// -- 1 : Insertion

db.legos.insertMany(
    [
        {
            nom: "Lego Creator 3-in-1",
            annee_sortie: 2020,
            nombre_de_pieces: 564,
            prix: 55.99,
            evaluations: [
                {
                    utilisateur: "Charlie",
                    note: 4
                }
            ]
        },
        {
            nom: "Faucon Millenium",
            annee_sortie: 2019,
            nombre_de_pieces: 1050,
            prix: 89.99,
            theme: "Star Wars",
            evaluations: [
                {
                    utilisateur: "David",
                    note: 5
                },
                {
                    utilisateur: "Eve",
                    note: 3
                }
            ]
        }
    ]
);

// -- 2 : Modification

// -- 2a

db.legos.update(
    {nom: "Lego Creator 3-in-1"},
    {$set :
        {prix: 49.99}
    }
);

// -- 2b

db.legos.updateOne(
    { 
        nom: "Faucon Millenium" 
    },
    { 
        $push: { 
            evaluations: { 
                nom: "Frank", 
                note: 4 
            } 
        } 
    }
);

// -- 3 : Recherche

// -- 3a

db.legos.find(
    { 
        theme: "Star Wars" 
    }
).sort(
    { 
        annee_sortie: -1 
    }
);

// -- 3b

db.legos.find(
    { 
        prix: { $gt: 100 } 
    }
).sort(
    { 
        nombre_de_pieces: -1 
    }
);
