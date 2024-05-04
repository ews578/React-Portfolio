export default function Project({title, description,img,link}) { 
    return (
      <div>
        <h2>{title}</h2>
        <p>
          {description}
          <img src={img} alt="" />
          <a href={link}></a>
        </p>
      </div>
    );
  }
  