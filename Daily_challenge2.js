// ARRAY 1
const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
  
  // Part 1 - Find all users older than 24
  const olderUser = texasss.filter(function(user){
      return user.age > 24;
  });
  console.log(olderUser);

   // Part 2 - Find the total age of all users
   const totalAge = texasss.reduce(function(a,b){
       return a + b.age;
   }, 0)
   console.log(totalAge);

   // Part 3 - List all female coders
   const femaleCodersTexasss = texasss.filter(function(user){
       return user.gender === 'f';
   });
   console.log(femaleCodersTexasss);

  // ARRAY 2
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  
  // Part 1 - List all users in US in ascending order
  const allUsUsers = newieyork.filter(function(user){
    return user.us === true;
  }) 
  .map(function(user){
    return user.name;
  })
  .sort(function(a,b){
    return a < b ? -1 : 1 ;
  });
  console.log(allUsUsers);          

  // Part 2 - Sort all users by age
  const usersByAge = newieyork.filter(function(user){
    return user.age;
  })
  .sort(function(a,b){
    return a < b ? -1 : 1 ;
  });
  console.log(usersByAge);

  // Part 3 -  List all female coders
  const femaleCodersNewieyork = newieyork.filter(function(user){
    return user.gender === 'f';
  });
  console.log(femaleCodersNewieyork);
  
  // ARRAY 3
  const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]
  
  // Part 1 - Find the total age of male coders under 25
  const maleCoders = vegzas.filter(function(user){
    return user.age < 25 && user.gender === 'm';
  })
  .reduce(function(a,b){
     return a + b.age;
    }, 0)
    console.log(maleCoders);

  // Part 2 - List all male coders over 30
  const olderMaleCoders = vegzas.filter(function(user){
    return user.age > 30 && user.gender === 'm';
  })
  console.log(olderMaleCoders);

  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
  const totalAgeOfAllArray= texasss.concat(newieyork,vegzas)
  .reduce(function(a,b){
    return a + b.age;
  }, 0)
  console.log(totalAgeOfAllArray);