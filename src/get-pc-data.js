function aggregateDisks(hddArray) {
  const aggregatedHdd = {};
  hddArray.forEach((hdd) => {
    if (!aggregatedHdd[hdd.volume]) {
      aggregatedHdd[hdd.volume] = hdd.size;
    } else {
      aggregatedHdd[hdd.volume] += hdd.size;
    }
  });

  Object.keys(aggregatedHdd).forEach(key => (aggregatedHdd[key] = `${aggregatedHdd[key]}B`));

  return aggregatedHdd;
}

function isNativeLength(value, prop) {
  return (Array.isArray(value) || typeof value === 'string') && prop === 'length';
}

function getPcData(PcData, paramsString) {
  if (paramsString === '') {
    return PcData;
  } else if (paramsString === 'volumes') {
    return aggregateDisks(PcData.hdd);
  }

  const paramsArray = paramsString.split('/')
    .filter(param => param !== '');

  const data = paramsArray.reduce((acc, param) => {
    return (acc !== void 0 && !isNativeLength(acc, param)) ? acc[param] : void 0;
  }, PcData);

  return data;
}

module.exports = getPcData;
