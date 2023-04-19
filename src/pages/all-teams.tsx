import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { useMemo } from "react";

import { TeamCard, CustomButton } from "components";

const AllTeams = () => {
    const navigate = useNavigate();

    const {
        tableQueryResult: { data, isLoading, isError },
        current,
        setCurrent,
        setPageSize,
        pageCount,
        sorter,
        setSorter,
        filters,
        setFilters,
    } = useTable();

    const allTeams = data?.data ?? [];


  

    const currentPrice = sorter.find((item) => item.field === "price")?.order;

    const toggleSort = (field: string) => {
        setSorter([{ field, order: currentPrice === "asc" ? "desc" : "asc" }]);
    };

    const currentFilterValues = useMemo(() => {
        const logicalFilters = filters.flatMap((item) =>
            "field" in item ? item : [],
        );

        return {
            teamName:
                logicalFilters.find((item) => item.field === "teamName")?.value ||
                "",
            paiementStatus:
                logicalFilters.find((item) => item.field === "paiementStatus")
                    ?.value || "",
        };
    }, [filters]);

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Error...</Typography>;

    return (
        <Box>
            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                <Stack direction="column" width="100%">
                    <Typography fontSize={25} fontWeight={700} color="#11142d">
                        {!allTeams.length
                            ? "There are no teams"
                            : "All Teams"}
                    </Typography>
                    <Box
                        mb={2}
                        mt={3}
                        display="flex"
                        width="84%"
                        justifyContent="space-between"
                        flexWrap="wrap"
                    >
                        {/* <Box
                            display="flex"
                            gap={2}
                            flexWrap="wrap"
                            mb={{ xs: "20px", sm: 0 }}
                        >
                            {/* <CustomButton
                                title={`Sort price ${
                                    currentPrice === "asc" ? "↑" : "↓"
                                }`}
                                handleClick={() => toggleSort("price")}
                                backgroundColor="#475be8"
                                color="#fcfcfc"
                            /> 
                            <TextField
                                variant="outlined"
                                color="info"
                                placeholder="Search by team name"
                                value={currentFilterValues.teamName}
                                onChange={(e) => {
                                    setFilters([
                                        {
                                            field: "teamName",
                                            operator: "contains",
                                            value: e.currentTarget.value
                                                ? e.currentTarget.value
                                                : undefined,
                                        },
                                    ]);
                                }}
                            />
                            <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue=""
                                value={currentFilterValues.paiementStatus}
                                onChange={(e) => {
                                    setFilters(
                                        [
                                            {
                                                field: "paiemantStatus",
                                                operator: "eq",
                                                value: e.target.value,
                                            },
                                        ],
                                        "replace",
                                    );
                                }}
                            >
                                <MenuItem value="">All</MenuItem>
                                {/* {[
                                    "paiement successfull",
                                    "waiting for paiement"
                                ].map((status) => (
                                    <MenuItem
                                        key={status}
                                        value={status.toLowerCase()}
                                    >
                                        {status}
                                    </MenuItem>
                                ))} 
                                <MenuItem key="complete" value="complete">paiement successfull</MenuItem>
                                <MenuItem key="incomplete" value="incomplete">waiting for paiement</MenuItem>
                            </Select>
                        </Box> */}
                    </Box>
                </Stack>
            </Box>

            <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {allTeams?.map((team) => (                    
                    <TeamCard
                        key={team._id}
                        id={team._id}
                        teamName={team.teamName}
                        fullName={team.fullName}
                        email={team.email}
                        phoneNumber={team.phoneNumber}
                        age={team.age}
                        teammates={team.teammates}
                        paiementStatus={team.paiementStatus}
                        paidAmount = {team.paidAmount}
                    />
                ))}
            </Box>

            {allTeams.length > 0 && (
                <Box display="flex" gap={2} mt={3} flexWrap="wrap">
                    <CustomButton
                        title="Previous"
                        handleClick={() => setCurrent((prev) => prev - 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={!(current > 1)}
                    />
                    <Box
                        display={{ xs: "hidden", sm: "flex" }}
                        alignItems="center"
                        gap="5px"
                    >
                        Page{" "}
                        <strong>
                            {current} of {pageCount}
                        </strong>
                    </Box>
                    <CustomButton
                        title="Next"
                        handleClick={() => setCurrent((prev) => prev + 1)}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                        disabled={current === pageCount}
                    />
                    <Select
                        variant="outlined"
                        color="info"
                        displayEmpty
                        required
                        inputProps={{ "aria-label": "Without label" }}
                        defaultValue={10}
                        onChange={(e) =>
                            setPageSize(
                                e.target.value ? Number(e.target.value) : 10,
                            )
                        }
                    >
                        {[10, 20, 30, 40, 50].map((size) => (
                            <MenuItem key={size} value={size}>
                                Show {size}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            )}
        </Box>
    );
};

export default AllTeams;