const { PrismaClient } = require('@prisma/client')
const data = require('./mock-data.json')
const prisma = new PrismaClient()

async function main() {
	const clerkId = 'user_2bi4aFu2btCm2LNF1H5muEcVPkb'
	const jobs = data.map(job => {
		return {
			...job,
			clerkId
		}
	})
	for (const job of jobs) {
		await prisma.job.create({
			data: job
		})
	}
}
main()
	.then(async () => {
		console.log('success!')
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
