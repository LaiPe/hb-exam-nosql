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
                utilisateur: "Frank", 
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

// -- 3c

db.legos.find(
    {},
    { 
        _id: 0, 
        nom: 1, 
        nombre_de_figures: 1 
    }
).sort(
    { 
        nombre_de_figures: -1 
    }
).limit(3);

// -- 3d

db.legos.find(
    { 
        "evaluations.note": { $gte: 4 } 
    }
);

// -- 3e

db.legos.find(
    { 
        $or: [
            { theme: "Technic" },
            { theme: "Creator" }
        ],
        nombre_de_pieces: { $lt: 2000 }
    }
);

// -- 3f

db.legos.find(
    { 
        theme: "Harry Potter",
        annee_sortie: { $gte: 2000, $lte: 2010 }
    }
);

// -- 3g 

db.legos.aggregate([
    {
        $addFields: {
            moyenne_evaluations: {
                $avg: "$evaluations.note"
            }
        }
    },
    {
        $match: {
            moyenne_evaluations: { $gte: 4 },
            nombre_de_pieces: { $gt: 1000 }
        }
    }
]);


// -- 4 : Suppression

// -- 4a 

db.legos.updateOne(
    {
        nom: "Faucon Millenium"
    },
    {
        $pull: {
            evaluations: {
                utilisateur: "Frank" // et non Bob :)
            }
        }
    }
);


// -- 4b

db.legos.deleteMany({
    'nombre_de_pieces': { $lt: 1000 }
});