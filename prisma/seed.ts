import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy recipes
  const user1 = await prisma.user.create({
    data:{
        email : 'email@email.com',
        name: "teme",
        password: "teme",
        github_link: "github.com",
        linkeding_link : "ldksfjs",

    }
  });

//   const recipe1 = await prisma.application.create({
//     data:{
//         progression : 'POOL',
//         applicantId: 1,

//     }
//   });

//   const recipe2 = await prisma.application.create({
//     data:{
//         progression : 'SUBMITTED',
//         applicantId: 1,

//     }
//   });
  console.log({ user1 });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });