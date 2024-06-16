"use strict";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.38.0(0e330ae453813de4e6cf272460fb79c7117073d0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/define("vs/basic-languages/redis/redis",["require","require"],E=>(()=>{var E=Object.defineProperty,e=Object.getOwnPropertyDescriptor,S=Object.getOwnPropertyNames,T=Object.prototype.hasOwnProperty,R={};((e,S)=>{for(var T in S)E(e,T,{get:S[T],enumerable:!0})})(R,{conf:()=>o,language:()=>n});var o={brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]},n={defaultToken:"",tokenPostfix:".redis",ignoreCase:!0,brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:["APPEND","AUTH","BGREWRITEAOF","BGSAVE","BITCOUNT","BITFIELD","BITOP","BITPOS","BLPOP","BRPOP","BRPOPLPUSH","CLIENT","KILL","LIST","GETNAME","PAUSE","REPLY","SETNAME","CLUSTER","ADDSLOTS","COUNT-FAILURE-REPORTS","COUNTKEYSINSLOT","DELSLOTS","FAILOVER","FORGET","GETKEYSINSLOT","INFO","KEYSLOT","MEET","NODES","REPLICATE","RESET","SAVECONFIG","SET-CONFIG-EPOCH","SETSLOT","SLAVES","SLOTS","COMMAND","COUNT","GETKEYS","CONFIG","GET","REWRITE","SET","RESETSTAT","DBSIZE","DEBUG","OBJECT","SEGFAULT","DECR","DECRBY","DEL","DISCARD","DUMP","ECHO","EVAL","EVALSHA","EXEC","EXISTS","EXPIRE","EXPIREAT","FLUSHALL","FLUSHDB","GEOADD","GEOHASH","GEOPOS","GEODIST","GEORADIUS","GEORADIUSBYMEMBER","GETBIT","GETRANGE","GETSET","HDEL","HEXISTS","HGET","HGETALL","HINCRBY","HINCRBYFLOAT","HKEYS","HLEN","HMGET","HMSET","HSET","HSETNX","HSTRLEN","HVALS","INCR","INCRBY","INCRBYFLOAT","KEYS","LASTSAVE","LINDEX","LINSERT","LLEN","LPOP","LPUSH","LPUSHX","LRANGE","LREM","LSET","LTRIM","MGET","MIGRATE","MONITOR","MOVE","MSET","MSETNX","MULTI","PERSIST","PEXPIRE","PEXPIREAT","PFADD","PFCOUNT","PFMERGE","PING","PSETEX","PSUBSCRIBE","PUBSUB","PTTL","PUBLISH","PUNSUBSCRIBE","QUIT","RANDOMKEY","READONLY","READWRITE","RENAME","RENAMENX","RESTORE","ROLE","RPOP","RPOPLPUSH","RPUSH","RPUSHX","SADD","SAVE","SCARD","SCRIPT","FLUSH","LOAD","SDIFF","SDIFFSTORE","SELECT","SETBIT","SETEX","SETNX","SETRANGE","SHUTDOWN","SINTER","SINTERSTORE","SISMEMBER","SLAVEOF","SLOWLOG","SMEMBERS","SMOVE","SORT","SPOP","SRANDMEMBER","SREM","STRLEN","SUBSCRIBE","SUNION","SUNIONSTORE","SWAPDB","SYNC","TIME","TOUCH","TTL","TYPE","UNSUBSCRIBE","UNLINK","UNWATCH","WAIT","WATCH","ZADD","ZCARD","ZCOUNT","ZINCRBY","ZINTERSTORE","ZLEXCOUNT","ZRANGE","ZRANGEBYLEX","ZREVRANGEBYLEX","ZRANGEBYSCORE","ZRANK","ZREM","ZREMRANGEBYLEX","ZREMRANGEBYRANK","ZREMRANGEBYSCORE","ZREVRANGE","ZREVRANGEBYSCORE","ZREVRANK","ZSCORE","ZUNIONSTORE","SCAN","SSCAN","HSCAN","ZSCAN"],operators:[],builtinFunctions:[],builtinVariables:[],pseudoColumns:[],tokenizer:{root:[{include:"@whitespace"},{include:"@pseudoColumns"},{include:"@numbers"},{include:"@strings"},{include:"@scopes"},[/[;,.]/,"delimiter"],[/[()]/,"@brackets"],[/[\w@#$]+/,{cases:{"@keywords":"keyword","@operators":"operator","@builtinVariables":"predefined","@builtinFunctions":"predefined","@default":"identifier"}}],[/[<>=!%&+\-*/|~^]/,"operator"]],whitespace:[[/\s+/,"white"]],pseudoColumns:[[/[$][A-Za-z_][\w@#$]*/,{cases:{"@pseudoColumns":"predefined","@default":"identifier"}}]],numbers:[[/0[xX][0-9a-fA-F]*/,"number"],[/[$][+-]*\d*(\.\d*)?/,"number"],[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,"number"]],strings:[[/'/,{token:"string",next:"@string"}],[/"/,{token:"string.double",next:"@stringDouble"}]],string:[[/[^']+/,"string"],[/''/,"string"],[/'/,{token:"string",next:"@pop"}]],stringDouble:[[/[^"]+/,"string.double"],[/""/,"string.double"],[/"/,{token:"string.double",next:"@pop"}]],scopes:[]}};return((R,o,n,r)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let n of S(o))T.call(R,n)||void 0===n||E(R,n,{get:()=>o[n],enumerable:!(r=e(o,n))||r.enumerable});return R})(E({},"__esModule",{value:!0}),R)})());