import ScGravatar from './ScGravatar';

describe('ScGravatar.vue', () => {
  it('check name component', () => {
    expect(ScGravatar.name).toEqual('sc-gravatar');
  });

  it('check props', () => {
    expect(ScGravatar.props).toMatchObject({
      email: {
        type: String,
        default: '',
      },
      defaultImg: {
        type: String,
        default: 'https://secure.intelipost.com.br/images/zenCircle.jpg',
      },
    });
  });
});
