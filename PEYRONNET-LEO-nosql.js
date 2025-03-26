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


