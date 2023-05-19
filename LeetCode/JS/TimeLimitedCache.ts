class TimeLimitedCache {
  dict:Record<string, {value: number, expired: number}> = {}

  constructor() {
    this.dict = {}
  }

  set(key: number, value: number, duration: number): boolean {
    const timestamp = new Date().getTime()
    const newExpired =  timestamp + duration

    if(key in this.dict && this.dict[key].expired > timestamp){
      this.dict[key] = {value, expired: newExpired};
      return true
    }
    
    this.dict[key] = {value, expired: newExpired};
    return false
  }

  get(key: number): number {
    const timestamp = new Date().getTime()
    const isExpired = this.dict[key]?.expired < timestamp
    return !isExpired && this.dict[key]?.value || -1
  }

	count(): number {
    const timestamp = new Date().getTime()
    return Object.values(this.dict).filter(({expired}) => expired > timestamp)?.length
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */