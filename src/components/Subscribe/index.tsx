import { useEffect, useState } from 'react';

import { getBg, fetchAndCacheBg } from '@utils/unsplashBg';
import { slideInFromBottom } from '@styles/animation';
import { SubscribeContent, SubscribeForm, SubscribeSection } from './style';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState<null | boolean>(null);
  const [bgImage, setBgImage] = useState(getBg());

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

    setIsError(!isValid);
    if (isValid) alert('Subscription Successful!');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      onSubmitForm(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (!bgImage) fetchAndCacheBg().then(setBgImage);
  }, [bgImage]);

  return (
    <SubscribeSection {...slideInFromBottom} $image={bgImage}>
      <SubscribeContent>
        <header>Sed ut perspiciatis unde omnis</header>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
        <hr />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore.
        </p>
      </SubscribeContent>

      <SubscribeForm $error={isError}>
        <label htmlFor="newsletter-email">Subscribe to our newsletter</label>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            id="newsletter-email"
            placeholder="Enter your email"
            value={email}
            onChange={onChangeEmail}
            onKeyDown={onKeyDown}
          />
          <button type="submit">
            <img src="/subscribe/plane.webp" alt="Paper plane" />
          </button>

          <p>Please enter a valid email!</p>
        </form>
      </SubscribeForm>
    </SubscribeSection>
  );
};

export default Subscribe;
