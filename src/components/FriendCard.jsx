import React from "react";
import { Link } from "react-router";

const statusColors = {
  active: "bg-red-500 text-white",
  "overdue": "bg-purple-400 text-white",
  "almost due": "bg-yellow-400 text-white",
  "on_track": "bg-green-700 text-white",
  "inactive": "bg-gray-400 text-white",
};

const FriendCard = ({ friend, index }) => {
  return (
    <div>
      <Link to={`/details/${friend.id}`}>
      <div key={index} className="p-10 text-center rounded-md shadow bg-white space-y-1">
      <img src={friend.picture} alt="" className="mx-auto rounded-full w-20 h-auto" />
      <h1 className="text-xl font-bold">{friend.name}</h1>
      <p className="text-sm text-[#808080]">{friend.days_since_contact}d ago</p>
      <div>
        <div className="badge">
            <div className=" flex gap-2 justify-center items-center">
                            {
                                friend.tags.map((tag, index) =>(
                                    <div className="badge text-black bg-[#cbfadb] rounded-full" key={index}>{tag}</div>
                                ))
                            }
                            </div>
        </div>

        <div className="my-4">
          <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                statusColors[friend.status]
              }`}
            >
              {friend.status}
            </span>
        </div>
      </div>
    </div>
    </Link>
    </div>
  );
};

export default FriendCard;
