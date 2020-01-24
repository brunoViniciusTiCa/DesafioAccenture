
export default {
  key: 'UserRelatorio',
  async handle ({ data }) {
    
    const { user } = data;

    console.log(user);

  }
}
