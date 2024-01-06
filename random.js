export default function Random () {
  return (
    <>
                    <div>
                <label htmlFor="size">Select a size</label>
                <select id="size">
                  {size.map((x) => {
                    return (
                      <option key={x.value} value={x.value}>
                        {x.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <Icon
                icon="icomoon-free:point-down"
                color="white"
                width="20"
                height="20"
              />
    </>
  );
};
