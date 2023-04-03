import { useState } from "react";
import { StarsReview } from "./StarsReview";

export const ReviewWidget: React.FC<{ submitReview: any }> = (props) => {
  const [stars, setStars] = useState(0);
  const [displayInput, setDisplayInput] = useState(false);
  const [reviewDesc, setReviewDesc] = useState("");

  const starValue = (value: number) => {
    setStars(value);
    setDisplayInput(true);
  };

  return (
    <div className="dropdown" style={{ cursor: "pointer" }}>
      <h5
        className="dropdown-toggle"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
      >
        Leave a review?
      </h5>
      <ul
        id="submitReviewRating"
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <button onClick={() => starValue(0)} className="dropdown-item">
            0 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(0.5)} className="dropdown-item">
            0.5 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(1)} className="dropdown-item">
            1 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(1.5)} className="dropdown-item">
            1.5 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(2)} className="dropdown-item">
            2 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(2.5)} className="dropdown-item">
            2.5 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(3)} className="dropdown-item">
            3 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(3.5)} className="dropdown-item">
            3.5 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(4)} className="dropdown-item">
            4 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(4.5)} className="dropdown-item">
            4.5 star(s)
          </button>
        </li>
        <li>
          <button onClick={() => starValue(5)} className="dropdown-item">
            5 star(s)
          </button>
        </li>
      </ul>
      <StarsReview rating={stars} size={32} />
      {displayInput && (
        <form method="POST" action="#">
          <hr />
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              id="submitReviewDescription"
              placeholder="Optional"
              rows={3}
              onChange={(e) => setReviewDesc(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => props.submitReview(stars, reviewDesc)}
              className="btn btn-primary mt-3"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};