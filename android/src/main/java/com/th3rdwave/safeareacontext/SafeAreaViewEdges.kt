package com.th3rdwave.safeareacontext

import java.util.*

enum class SafeAreaViewEdgeModes {
  OFF,
  ADDITIVE,
  MAXIMUM
}

data class SafeAreaViewEdges(val top: SafeAreaViewEdgeModes,
                             val right: SafeAreaViewEdgeModes,
                             val bottom: SafeAreaViewEdgeModes,
                             val left: SafeAreaViewEdgeModes)

class Safe
