import shuffledUsers from '@utils/shuffledUsers';
import { IUser } from './type';
import { UserHeader, UserList, UserSection } from './style';

const Users = () => {
  return (
    <UserSection>
      <UserHeader>
        Snap photos and share like
        <br />
        never before
      </UserHeader>

      <UserList>
        {shuffledUsers.map(({ id, img, title, description }: IUser) => (
          <div key={id}>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>{description}</p>
            <button type="button">LEARN MORE</button>
          </div>
        ))}
      </UserList>
    </UserSection>
  );
};

export default Users;
