// @ts-check
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import 'dotenv/config';

/**
 * =================================================================
 *                       CONFIGURAÇÃO
 * =================================================================
 * Modifique as variáveis abaixo com o email e a senha do usuário
 * que você deseja criar.
 */
const email = 'admin@example.com';
const password = 'strong-password-123';
/**
 * =================================================================
 */

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error(
    'ERRO: A variável de ambiente GOOGLE_APPLICATION_CREDENTIALS não está definida.'
  );
  console.error(
    'Por favor, aponte-a para o caminho do seu arquivo JSON de conta de serviço do Firebase.'
  );
  process.exit(1);
}

try {
  console.log('Inicializando o Firebase Admin SDK...');
  initializeApp({
    credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  });
  console.log('SDK inicializado com sucesso.');
} catch (error) {
  console.error('Falha ao inicializar o Firebase Admin SDK:', error);
  process.exit(1);
}

const auth = getAuth();

console.log(`\nTentando criar o usuário: ${email}`);

auth
  .createUser({
    email: email,
    password: password,
    emailVerified: true,
  })
  .then(userRecord => {
    console.log('\n=================================================');
    console.log('✅ Usuário criado com sucesso!');
    console.log('=================================================');
    console.log('UID:', userRecord.uid);
    console.log('Email:', userRecord.email);
    console.log('\nVocê já pode usar essas credenciais para fazer login.');
  })
  .catch(error => {
    console.error('\n=================================================');
    console.error('❌ Erro ao criar usuário:');
    console.error('=================================================');
    if (error.code === 'auth/email-already-exists') {
      console.error(
        `O email "${email}" já está em uso por outro usuário.`
      );
      console.error(
        'Tente usar um email diferente ou exclua o usuário existente no console do Firebase.'
      );
    } else if (error.code === 'auth/invalid-password') {
      console.error('A senha fornecida é inválida. Ela deve ter no mínimo 6 caracteres.');
    } else {
      console.error('Código do Erro:', error.code);
      console.error('Mensagem:', error.message);
    }
     console.error('\n');
  });
