// @ts-nocheck
import { useCallback, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useGetData = (data) => {
  const [allAuthors, setAllAuthors] = useState([]);
  const [allLabels, setAllLabels] = useState([]);

  const getAllAuthors = useCallback(() => {
    if (data) {
      data?.repository.pullRequests.edges.map((item) =>
        allAuthors.push(item.node.author.login),
      );
    }

    setAllAuthors(Array.from(new Set(allAuthors)));
    return allAuthors.map((item) => item);
  }, [allAuthors, data]);

  const getAllLabels = useCallback(() => {
    if (data) {
      data?.repository.pullRequests.edges.map((item) =>
        item.node.labels.nodes.map((labelData) =>
          allLabels.push(labelData.name),
        ),
      );
    }

    setAllLabels(Array.from(new Set(allLabels)));
    return allLabels.map((item) => item);
  }, [allLabels, data]);

  return {
    getAllAuthors,
    getAllLabels,
    allAuthors,
    allLabels,
  };
};

export default useGetData;
