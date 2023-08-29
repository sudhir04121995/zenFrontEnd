db.StudentList.insertMany([
    {
        name: "sudhir",
        Batch: "B47WD",
        email: "sudhir@gmail.com",
        task: 80,
        attendance: 90,
        experience: 2
    },
    {
        name: "vicky",
        Batch: "B47WD",
        email: "vicky@gmail.com",
        task: 80,
        attendance: 93,
        experience: 2
    }, {
        name: "mathan",
        Batch: "B47WD",
        email: "mathan@gmail.com",
        task: 87,
        attendance: 97,
        experience: 2
    }, {
        name: "aravinth",
        Batch: "B47WD",
        email: "aravinth@gmail.com",
        task: 80,
        attendance: 91,
        experience: 2
    }, {
        name: "mugesh",
        Batch: "B47WD",
        email: "mugesh@gmail.com",
        task: 85,
        attendance: 94,
        experience: 2
    }, {
        name: "sudhir",
        Batch: "B47WD",
        email: "sudhir@gmail.com",
        task: 80,
        attendance: 90,
        experience: 2
    },
    {
        name: "vicky",
        Batch: "B47WD",
        email: "vicky@gmail.com",
        task: 80,
        attendance: 93,
        experience: 2
    }, {
        name: "mathan",
        Batch: "B47WD",
        email: "mathan@gmail.com",
        task: 87,
        attendance: 97,
        experience: 2
    }, {
        name: "aravinth",
        Batch: "B47WD",
        email: "aravinth@gmail.com",
        task: 80,
        attendance: 91,
        experience: 2
    }, {
        name: "mugesh",
        Batch: "B47WD",
        email: "mugesh@gmail.com",
        task: 85,
        attendance: 94,
        experience: 2
    }, {
        name: "sudhir",
        Batch: "B47WD",
        email: "sudhir@gmail.com",
        task: 80,
        attendance: 90,
        experience: 2
    },
    {
        name: "vicky",
        Batch: "B47WD",
        email: "vicky@gmail.com",
        task: 80,
        attendance: 93,
        experience: 2
    }, {
        name: "mathan",
        Batch: "B47WD",
        email: "mathan@gmail.com",
        task: 87,
        attendance: 97,
        experience: 2
    }, {
        name: "aravinth",
        Batch: "B47WD",
        email: "aravinth@gmail.com",
        task: 80,
        attendance: 91,
        experience: 2
    }, {
        name: "mugesh",
        Batch: "B47WD",
        email: "mugesh@gmail.com",
        task: 85,
        attendance: 94,
        experience: 2
    }, {
        name: "sudhir",
        Batch: "B47WD",
        email: "sudhir@gmail.com",
        task: 80,
        attendance: 90,
        experience: 2
    },
    {
        name: "vicky",
        Batch: "B47WD",
        email: "vicky@gmail.com",
        task: 80,
        attendance: 93,
        experience: 2
    }, {
        name: "mathan",
        Batch: "B47WD",
        email: "mathan@gmail.com",
        task: 87,
        attendance: 97,
        experience: 2
    }, {
        name: "aravinth",
        Batch: "B47WD",
        email: "aravinth@gmail.com",
        task: 80,
        attendance: 91,
        experience: 2
    }, {
        name: "mugesh",
        Batch: "B47WD",
        email: "mugesh@gmail.com",
        task: 85,
        attendance: 94,
        experience: 2
    }
]);
// to find the studentList information
db.StudentList.find();

// specific data
db.StudentList.find({ name: "sudhir" })

// to insert a collection 
db.mentor.insertMany([
    {
        name: "sanjai",
        Batch: "B47WD"
    },
    {
        name: "nagarjan",
        Batch: "B46WD"
    },
    {
        name: "sangeetha",
        Batch: "B45WD"
    },
    {
        name: "kamal",
        Batch: "B42WD"
    },
    {
        name: "siva",
        Batch: "B45WD"
    }
]);

//to insert one document in a a collection

db.mentor.insertOne({ name: "raji", Batch: "B47WD"})

// update one
db.StudentList.updateOne({name:"sudhir"},{$set:{experience:1}})

// update many
db.StudentList.updateMany({experience:2},{$set:{experience:1}})

//findOne
db.StudentList.findOne({name:"sudhir"});

// find
db.StudentList.find({experience:1});

//deleteOne
db.StudentList.deleteOne({name:"sudhir"});

// deleteMany
db.StudentList.deleteMany({experience:1});

// toArray
db.StudentList.find().toArray();

//find using forEach functionality
 db.StudentList.find().forEach(function(st){print("Name :",st.name,"Experience :",st.experience)});

 //sorting in Ascending
 db.StudentList.find().sort({experience:1}).toArray();

 //sorting in Descending 
  db.StudentList.find().sort({experience:-1}).toArray();

  // with limit
  db.StudentList.find().sort({experience:1}).limit(5);

  // with skip
  db.StudentList.find().sort({experience:1}).limit(5).skip(2);

  //count of documents
  db.StudentList.find({experience:1}).count();

  //greater than
  db.StudentList.find({task:{$gt:90}});
   db.StudentList.find({experience:{$gt:2}});

   //greater than with sort
    db.StudentList.find({experience:{$gt:2}}).sort({experience:-1});

    //greater than with sort ,limit and skip
    db.StudentList.find({experience:{$gt:2}}).sort({experience:-1}).limit(8).skip(2);

    //lesser than
    db.StudentList.find({experience:{$lt:2}});

    // greater than or equal to
    db.StudentList.find({experience:{$gte:2}});

    //lesser than or equal to
    db.StudentList.find({task:{$lte:70}});
    db.StudentList.find({experience:{$gte:2}});

    // in between values
    db.StudentList.find({experience:{$gt:2,$lt:4}});

    // not operator
    db.StudentList.find({experience:{$not:{$gt:2,$lt:4}}});

    // select this or that
       db.StudentList.find({$or:[{task:{$gt:70}},{experience:{$gte:3}}]})
    
       // staging in aggregation
       //db.collectionName.aggregate.([stage1,stage2,stage3])

       db.StudentList.aggregate([{$match:{name:"sudhir"}}]);

       db.StudentList.aggregate([
        {$match:{name:"sudhir"}},
        {$group:{_id:"$name",totalExperience:{$sum:"$experience"}}}
    ]);

    //lookup aggregation

    db.StudentList.aggregate([
        {$group:{
            _id:"$name",
            duplicate:{$addToSet:"$_id"},
            totalCount:{$sum:1}
        }
    }
    ])

    //duplicate removal
    db.StudentList.aggregate([
        {$group:{
            _id:"$name",
            duplicate:{$addToSet:"$_id"},
            totalCount:{$sum:1}
        }
    },
    {
        $match:{
            totalCount:{$gt:1}
        }
    }
    ]).forEach((doc)=>{
        doc.duplicate.shift();
        db.StudentList.deleteMany({_id:{$in:doc.duplicate}})
    })