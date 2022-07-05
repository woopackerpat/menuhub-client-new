import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";

function ProfileAvatar({ cursor, width, height, margin, profilePicEdit, fontSize, commenterPic, commenterFirstName, commenterLastName}) {
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
        console.log(name)
        return {
            sx: {
                bgcolor: stringToColor(name),
                cursor,
                width,
                height,
                margin,
                fontSize
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    useEffect(() => {
    }, [profilePicEdit])

    return (
        <div>
            {profilePicEdit ? (
                <Avatar
                sx={{ cursor: `${cursor}`, width: `${width}`, height: `${height}`, margin: margin }}
                src={profilePicEdit}
            />
            ) : commenterPic ? (
                <Avatar
                    sx={{ cursor: `${cursor}`, width: `${width}`, height: `${height}`, margin: margin }}
                    src={commenterPic}
                />
            ) : commenterFirstName ? (
                <Avatar
                    sx={{ cursor: `${cursor}`, width: `${width}`, height: `${height}`, margin: margin }}
                    {...stringAvatar(`${commenterFirstName} ${commenterLastName}`)}
                />
            ) : profilePicUrl ? (
                <Avatar
                    sx={{ cursor: `${cursor}`, width: `${width}`, height: `${height}`, margin: margin }}
                    src={profilePicUrl}
                />
            ) : firstName ? (
                <Avatar
                    sx={{ cursor: `${cursor}`, width: `${width}`, height: `${height}`, margin: margin }}
                    {...stringAvatar(`${firstName} ${lastName}`)}
                />
            ) : (
                <Avatar
                    sx={{ cursor: `${cursor}`, width: `${width}`, height: `${height}`, margin: margin }}
                    // src={profilePicUrl}
                />
            )}
        </div>
    )
}
export default ProfileAvatar