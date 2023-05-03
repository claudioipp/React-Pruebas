import { useState } from "react";

interface TwitterCardProps {
  user: string;
  name: string;
  isFollowingInicial: boolean;
  isStaredInicial: boolean;
}

export function TwitterCard({
  user,
  name,
  isFollowingInicial,
  isStaredInicial,
}: TwitterCardProps) {
  const [isFollowing, setEstado] = useState(isFollowingInicial);
  const [isStared, setStar] = useState(isStaredInicial);

  const buttonClassName =
    "tw-followCard-button" + (isFollowing ? " is-following" : "");
  const buttonText = isFollowing ? "Siguiendo" : "Seguir";

  const starClassName = "tw-followCard-star" + (isStared ? " stared" : "");

  function handleClick() {
    setEstado(!isFollowing);
  }

  function handleStar() {
    setStar(!isStared);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${user}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{user}</span>
        </div>
      </header>

      <aside className="tw-followCard-buttons">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{buttonText}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>

        <button className={starClassName} onClick={handleStar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1da1f2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2 L15.09 8.43 L22 9.27 L17 14.16 L18.18 21 L12 17.66 L5.82 21 L7 14.16 L2 9.27 L8.91 8.43 Z"></path>
          </svg>
        </button>
      </aside>
    </article>
  );
}
