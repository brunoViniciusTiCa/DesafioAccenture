import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle ({ data }) {
    
    const { user } = data;

    await Mail.sendMail({
      from: 'Testando Fila <brunoTeste@gmail.com>',
      to:`${name} <${email}>`,
      subject: 'Cadastro de Usuario',
      html: `Ola, ${name}, bem-vindo  ao sistema de filas Bruno Dev :D`
    });

  }
}
