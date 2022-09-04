import { useState, useEffect } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValues } from "../../utils/filterData";
import axios from "axios";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const [searchLocation, setSearchLocation] = useState("");
  const [visibleSearch, setVisibleSearch] = useState(false);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  //   const fetchSearchData = async () => {
  //     console.log("This is running", searchLocation);
  //     const path = router.pathname;
  //     const { query } = router;
  //     const data = await fetchApi(
  //       `${baseUrl}/auto-complete?query=${searchLocation}&hitsPerPage=10`
  //     );
  //     data?.hits.forEach((item) => {
  //       query[item.name] = item.name;
  //     });

  //     router.push({ pathname: path, query });
  //     return data;
  //   };

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      {/* <Button color="gra.100" onClick={() => setVisibleSearch(true)}>
        Search By Location
      </Button>
      {visibleSearch && (
        <Flex>
          <Input
            placeholder="Search by Location.."
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <Button onClick={fetchSearchData}>Search</Button>
        </Flex>
      )} */}
    </Flex>
  );
};

export default SearchFilters;
