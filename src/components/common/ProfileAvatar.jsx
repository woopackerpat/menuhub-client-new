import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";

function ProfileAvatar({cursor, width, height}) {
    const { user } = useAuth()
    const { profilePicUrl, firstName, lastName } = user
    const [fullName, setFullname] = useState()

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }

    useEffect(() => {
        setFullname(firstName + ' ' + lastName)
        console.log(cursor)
    }, [])

    return (
        <div>
            {profilePicUrl ? (
            <Avatar 
            sx={{ cursor: `${cursor}`, width: width, height: height }}
            src={profilePicUrl}
            />
            ) : (
            <Avatar
            sx={{ cursor: `${cursor}`, width: width, height: height}}
            {...stringAvatar(`${firstName} ${lastName}`)}
            />
            )}
        </div>
    )
}
export default ProfileAvatar