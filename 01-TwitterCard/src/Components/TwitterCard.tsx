import { useState } from "react";

interface TwitterCardProps {
  user: string;
  name: string;
  isFollowingInicial: boolean;
}

export function TwitterCard({
  user,
  name,
  isFollowingInicial,
}: TwitterCardProps) {
  const [isFollowing, setEstado] = useState(isFollowingInicial);

  const buttonClassName =
    "tw-followCard-button" + (isFollowing ? " is-following" : "");
  const buttonText = isFollowing ? "Siguiendo" : "Seguir";

  function handleClick() {
    setEstado(!isFollowing);
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

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{buttonText}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
