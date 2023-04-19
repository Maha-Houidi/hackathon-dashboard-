import {PersonOutlineOutlined , EmailOutlined, Phone,Circle, CakeOutlined, AttachMoneyOutlined } from "@mui/icons-material";
import { useNavigate } from "@pankod/refine-react-router-v6";
import {
    Typography,
    Box,
    Stack,
} from "@pankod/refine-mui";

import { TeamCardProps , InfoBarProps } from "interfaces/team";
import CustomButton from "./CustomButton";

const InfoBar = ({ icon, name }: InfoBarProps) => (
    <Stack
        flex={1}
        minWidth={{ xs: "100%", sm: 300 }}
        gap={1.5}
        direction="row"
    >
        {icon}
        <Typography fontSize={14} color="#808191">
            {name}
        </Typography>
    </Stack>
);

const TeamCard = ({
    id,
    teamName,
    fullName,
    email,
    phoneNumber,
    age,
    teammates,
    paiementStatus,
    paidAmount,
}: TeamCardProps) => {

    const navigate = useNavigate();

    return (
        <>
        <Box
            width="100%"
            sx={{
                bgcolor:"#fff",
                textDecoration:"none",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "20px",
                padding: "20px",
                "&:hover": {
                    boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
                },
            }}
        >
        <Stack
            direction="column"
            justifyContent="space-between"
            flex={1}
            gap={{ xs: 4, sm: 2 }}
        >
            <Stack
                
                direction="row"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography fontSize={22} fontWeight={600} color="#11142d">
                    {teamName} ----- {1+teammates.length} members
                </Typography>
                <CustomButton
                    title="Pay"
                    backgroundColor="#475BE8"
                    color="#FCFCFC"
                    icon= {<AttachMoneyOutlined/>}
                    handleClick={() => (navigate(`/teams/edit/${id}`))}
                    disabled={paiementStatus==="complete"}
                />
            </Stack>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                gap={0.5}
            >
                <InfoBar
                    icon={<PersonOutlineOutlined sx={{ color: "#808191" }} />}
                    name={fullName}
                />
                <InfoBar
                    icon={<EmailOutlined sx={{ color: "#808191" }} />}
                    name={email}
                />
                <InfoBar
                    icon={<Phone sx={{ color: "#808191" }} />}
                    name={phoneNumber}
                />
                <InfoBar
                    icon={<CakeOutlined sx={{ color: "#808191" }} />}
                    name={age}
                />
                
                <Stack
                    flex={1}
                    minWidth={{ xs: "100%", sm: 300 }}
                    gap={1.5}
                    direction="row"
                >    
                    <Circle sx={{ color: paiementStatus==="complete" ? "green" : (paidAmount===0 ?  "red" :"orange") , width:"15px"}}  />
                    <Typography fontSize={14} color={paiementStatus==="complete" ? "green" : (paidAmount===0 ?  "red" :"orange")}>
                        { (paiementStatus==="incomplete") ? (paidAmount===0 ?  "waiting for payment" :"payment incomplete") : "payment successful" }
                    </Typography>
                    <Circle sx={{ color: paiementStatus==="incomplete" ?  (paidAmount===0 ?  "red" :"orange"): "green" , width:"15px"}}  />
                    <Typography fontSize={14} color={paiementStatus==="incomplete" ?  (paidAmount===0 ?  "red" :"orange"): "green"}>
                        {paidAmount }  dt
                    </Typography>
                </Stack>
               
                
            </Stack>
            <Stack
                gap={2}
                direction="row"
                flexWrap="wrap"
                alignItems="center"
            >
                <Typography fontSize={18} fontWeight={600} color="#11142d">
                    team mates
                </Typography>
            </Stack>
            <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="start"
            alignItems="center"
            
            >
                {teammates.map(({fullName, email}, index)=>(
                    <Stack
                    key={index}
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={0.5}

                    sx={{
                        borderBottom:1
                    }}
                    >
                        <InfoBar
                            icon={<PersonOutlineOutlined sx={{ color: "#808191" }} />}
                            name={fullName}
                        />
                        <InfoBar
                            icon={<EmailOutlined sx={{ color: "#808191" }} />}
                            name={email}
                        />
                    </Stack>
                ))}
            </Stack>
        </Stack>
    </Box>
    
    </>
    );
};

export default TeamCard;