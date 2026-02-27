import { prisma } from './lib/prisma.js';

async function testConnection() {
  try {
    console.log('⏳ Tentando conectar ao banco de dados...');
    const userCount = await prisma.user.count();
    
    console.log('✅ Conexão estabelecida com sucesso!');
    console.log(`📊 Total de usuários no banco: ${userCount}`);
    console.log('📝 Testando leitura de produtos...');
    const products = await prisma.product.findMany();
    console.log(`📦 Produtos encontrados: ${products.length}`);

  } catch (error) {
    console.error('❌ Erro ao conectar no banco:');
    if (error instanceof Error) {
      console.error(`Mensagem: ${error.message}`);
    }
  } finally {
    await prisma.$disconnect();
    process.exit();
  }
}

testConnection();