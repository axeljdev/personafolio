import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchApi from "../services/fetchApi";

function ArrowNext() {
  const { id } = useParams();
  const nextProjectId = parseInt(id, 10) + 1;
  const [nextProjectExists, setNextProjectExists] = useState(false);

  useEffect(() => {
    const checkNextProject = async () => {
      try {
        const project = await fetchApi(`/api/projects/${nextProjectId}`);
        setNextProjectExists(!!project);
      } catch (error) {
        setNextProjectExists(false);
      }
    };

    checkNextProject();
  }, [nextProjectId]);

  if (!nextProjectExists) {
    return null;
  }

  return (
    <Link to={`/Project/${nextProjectId}`}>
      <img
        src="../src/assets/images/ArrowNext.svg"
        alt="Projet suivant"
        className=" ml-52 w-52 animate__animated animate__tada"
      />
    </Link>
  );
}

export default ArrowNext;